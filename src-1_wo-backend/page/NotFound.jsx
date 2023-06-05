import { useNavigate } from "react-router-dom";


export const NotFound = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
      navigate("/", { replace: true });
    }



    return (
        <main style={{ textAlign: "center" }}>
            <b style={{ fontSize: 64 }}>404</b>
            <p>Sorry, we couldn't find that page :(</p>
            <button
                // className={css.buttonToHome}
                onClick={handleSubmit}
            >
                Go to HOME
            </button>
        </main>
    );
};