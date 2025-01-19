const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// Decode Firebase credentials from environment variable
const firebaseCredentials = JSON.parse(
  Buffer.from(process.env.FIREBASE_CREDENTIALS, "base64").toString("utf8")
);

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(firebaseCredentials),
});

const db = admin.firestore();
const app = express();
const corsOptions = {
  origin: `${process.env.CORS}`,
  methods: ["POST"],
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Route to verify certificate
app.post("/api/certificate/verify", async (req, res) => {
  const { certificateId } = req.body;
  console.log(certificateId);
  if (!certificateId) {
    return res.status(400).json({ error: "Certificate number is required." });
  }

  try {
    const certificatesRef = db.collection("Certificates");
    const querySnapshot = await certificatesRef
      .where("id", "==", certificateId)
      .get();

    if (querySnapshot.empty) {
      return res.status(200).json({
        message: "Certificate number is not valid",
      });
    }

    let certificateInfo;
    querySnapshot.forEach((doc) => {
      certificateInfo = doc.data();
    });

    return res
      .status(200)
      .json({ ...certificateInfo, message: "Certificate is valid" });
  } catch (error) {
    console.error("Error verifying certificate:", error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
});

// Route to add a certificate
app.post("/api/add/certificate", async (req, res) => {
  const { username, mark, course, doc, admin_name, admin_pass } = req.body;

  if (
    admin_name == process.env.ADMIN_USERNAME &&
    admin_pass == process.env.ADMIN_USER_PASS
  ) {
    if (!username || !mark || !course || !doc) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      // Check if a certificate with the same username and course already exists
      const certificatesRef = db.collection("Certificates");
      const querySnapshot = await certificatesRef
        .where("info.username", "==", username)
        .where("info.course", "==", course)
        .get();

      if (!querySnapshot.empty) {
        return res.status(400).json({
          error: "Certificate for this user and course already exists.",
        });
      }

      // Generate certificate ID
      const randomChars = () => {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return Array.from(
          { length: 7 },
          () => chars[Math.floor(Math.random() * chars.length)]
        ).join("");
      };

      const certificateId = randomChars();

      // Save to Firestore
      await db.collection("Certificates").doc().set({
        id: certificateId,
        info: {
          username,
          mark,
          course,
          doc,
        },
      });

      return res.status(201).json({ certificateId });
    } catch (error) {
      console.error("Error adding certificate:", error);
      return res.status(500).json({ error: "Internal Server Error." });
    }
  } else {
    return res.status(500).json({ error: "Invaid Route" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
