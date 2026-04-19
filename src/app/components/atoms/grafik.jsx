import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Grafik = ({ chartData, suhuRuangan, waktu, suhu }) => {
  return (
    <div className="w-full" style={{ minHeight: "300px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" />
          <XAxis
            dataKey="waktu"
            type="number"
            domain={[0, 100]}
            stroke="#ffffff"
          />
          <YAxis domain={[0, 100]} stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#000000",
              borderColor: "#000000",
              color: "#fff",
            }}
          />
          <ReferenceLine
            y={suhuRuangan}
            stroke="#ffffff"
            strokeDasharray="3 3"
            label={{
              value: "Suhu Ruangan",
              fill: "#ffffff",
              position: "insideTopRight",
            }}
          />
          <Line
            type="monotone"
            dataKey="suhu"
            stroke="#ffffff"
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />
          <ReferenceDot
            x={waktu}
            y={suhu}
            r={7}
            fill="#000000"
            stroke="#FFFFFF"
            strokeWidth={2}
            isFront={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafik;
