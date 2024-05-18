import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, ComponentType } from "react";

const withAuthProtection = <P extends object>(
  Component: ComponentType<P>
): React.FC<P> => {
  const ProtectedComponent: React.FC<P> = (props) => {
    const navigate = useNavigate();

    const isAuthenticated = true;

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/", { replace: true });
      }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Navigate to="/" replace />
    );
  };

  return ProtectedComponent;
};

export default withAuthProtection;
