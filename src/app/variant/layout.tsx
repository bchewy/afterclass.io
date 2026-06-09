import { type PropsWithChildren } from "react";
import { archivoBlack, jetbrainsMono } from "@/common/fonts";
import "@/modules/variant/styles/zine.scss";

export default function VariantRootLayout({ children }: PropsWithChildren) {
  return (
    <div className={`${archivoBlack.variable} ${jetbrainsMono.variable}`}>
      {children}
    </div>
  );
}
