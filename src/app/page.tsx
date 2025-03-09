import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      width: "500px",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src="/logo.gif" alt="Логотип" style={{ width: "50px", height: "auto", marginRight: "10px" }} />
        <h1 style={{ margin: 0, flexGrow: 1, textAlign: "center", fontFamily: "Creepster" }}>
          Zombie Punks Staking App
        </h1>
      </div>
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <Staking />
    </div>
  );
}
