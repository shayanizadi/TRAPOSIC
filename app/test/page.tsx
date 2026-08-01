export default async function TestPage() {
  await new Promise((r) => setTimeout(r, 3000)); // 3 ثانیه تأخیر
  return (
    <div style={{ color: "#fff", padding: "40px" }}>
      <h1>Loaded!</h1>
    </div>
  );
}
