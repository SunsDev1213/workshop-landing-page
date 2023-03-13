import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../../styles/Nutrition.module.css";
import { DATA } from "./mockup";

export default function NutritionInfo() {
  return (
    <div className={styles.nutrition_main}>
      <div className={styles.subContainer}>
        <div>
          <p className={styles.title}>Nutrition Info</p>
          <p className={styles.subTitle}>Ctrl - The Energy Shake</p>
        </div>
        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Ctrl</th>
                <th style={{ textAlignLast: "end" }}>100ml</th>
                <th style={{ textAlignLast: "end" }}>330ml</th>
              </tr>
            </thead>
            <tbody>
              {DATA.map((item: any, key: any) => (
                <tr key={key}>
                  <td style={{ border: "none" }}>{item.title}</td>
                  <td
                    style={{
                      border: "none",
                      textAlignLast: "end",
                      minWidth: 80,
                    }}
                  >
                    <p>
                      {item.value1?.first}
                      <br />
                      {item.value1?.second}
                    </p>
                  </td>
                  <td
                    style={{
                      border: "none",
                      textAlignLast: "end",
                      minWidth: 80,
                    }}
                  >
                    <p>
                      {item.value2?.first}
                      <br />
                      {item.value2?.second}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
