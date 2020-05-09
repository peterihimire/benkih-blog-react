import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RenderTop = () => {
  const { slug } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  return null;
};

export default RenderTop;
