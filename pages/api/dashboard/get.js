import { connectDB } from "@/db";

export default async function handler(req, res) {
  const { startDate, endDate } = req.query;
  try {
    const client = await connectDB();
    const db = client.db("demo-dashboard");
    if (req.method === "GET") {
      const data = await db
        .collection("dashboard")
        .aggregate([
          {
            $sort: { added: 1 },
          },
          ...(startDate &&
            endDate && [
              {
                $match: {
                  added: { $gte: new Date(startDate), $lte: new Date(endDate) },
                },
              },
            ]),
          { $limit: 30 },
        ])
        .toArray();
      return res.status(200).json({ data });
    }
    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (err) {
    console.log("Error....", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
