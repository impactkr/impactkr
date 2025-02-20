import Logo_Icon from "/public/image/logo_icon_white.svg";
import Logo_Col from "/public/image/logo_col_gray.svg";
import Logo_Row from "/public/image/logo_row_white.svg";

interface LogoProps {
  type: "icon" | "col" | "row";
}

function Logo({ type }: LogoProps) {
  switch (type) {
    case "icon":
      return <Logo_Icon width="100%" height="100%" alt="임팩트코리아 로고" />;
    case "col":
      return <Logo_Col width="100%" height="100%" alt="임팩트코리아 로고" />;
    case "row":
      return <Logo_Row width="100%" height="100%" alt="임팩트코리아 로고" />;
    default:
      return null;
  }
}

export default Logo;
