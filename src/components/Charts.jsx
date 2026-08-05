'use client';

export function LineChart() {
  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
        cursor:"pointer"
      }}
    >
      📈 Line Chart (Gradient Style)
    </div>
  );
}


export function BarChart() {
  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        cursor:"pointer"
      }}
    >
      📊 Bar Chart Placeholder
    </div>
  );
}


export function PieChart() {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "16px",
        background: "#00598a",
        backdropFilter: "blur(10px)",
        border: "1px solid  #162456",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "500",
        cursor:"pointer"
      }}
    >
      🥧 Pie Chart Placeholder
    </div>
  );
}
