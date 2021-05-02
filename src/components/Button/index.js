import { Button, Link } from "./styles";

export default function ButtonComponent({
  onClick,
  children,
  href,
  size = "small",
}) {
  return href ? (
    <Link size={size} href={href}>
      {children}
    </Link>
  ) : (
    <Button onClick={onClick} size={size}>
      {children}
    </Button>
  );
}
