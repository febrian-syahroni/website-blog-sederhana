import data from "@/app/api/data";

export default function Handler(req, res) {
  const { handler } = data;
  if (handler) return res.status(200).json(handler);
  return res.status(404).json({ error: "Data Not Found" });
}
