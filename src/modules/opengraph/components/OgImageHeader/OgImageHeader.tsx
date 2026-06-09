import { AfterclassIcon } from "@/common/components/icons";
import { type UniversityAbbreviation } from "@prisma/client";

const SchoolIcon = ({ school }: { school: UniversityAbbreviation }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.375rem",
        borderRadius: "9999px",
        paddingLeft: "0.375rem",
        paddingRight: "0.75rem",
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid rgba(15, 15, 15, 0.15)",
      }}
    >
      <div
        style={{
          alignItems: "center",
          border: "1px solid #000000",
          borderRadius: "9999px",
          color: "#000000",
          display: "flex",
          fontSize: "0.875rem",
          fontWeight: "700",
          height: "3rem",
          justifyContent: "center",
          letterSpacing: "-0.02em",
          width: "3rem",
        }}
      >
        {school}
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "1.53125rem",
          letterSpacing: "-0.02125rem",
          color: "#000000",
        }}
      >
        {school}
      </div>
    </div>
  );
};

export const OgImageHeader = ({
  school,
  code,
}: {
  school: UniversityAbbreviation;
  code?: string;
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "stretch",
    }}
  >
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <SchoolIcon school={school} />
      {code && (
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#525252",
            fontWeight: "800",
          }}
        >
          {code}
        </div>
      )}
    </div>
    <AfterclassIcon height="51.75" width="50" style={{ color: "#000000" }} />
  </div>
);
