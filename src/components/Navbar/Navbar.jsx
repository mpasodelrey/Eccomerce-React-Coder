import { Container, Stack, Typography } from "@mui/material";
import search from "../../assets/images/search.png";
import profile from "../../assets/images/profile.png";
import cart from "../../assets/images/cart.png";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
    const navLinks = [
        { title: "Inicio", path: "/", active: true },
        { title: "Productos", path: "/", active: false },
        { title: "Contacto", path: "/", active: false },
        { title: "Redes Sociales", path: "https://www.instagram.com/gm_providers/", active: false }, // Cambia la URL aquí
    ];

    const cartItemsCount = 5; // Número fijo hardcodeado

    return (
        <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ width: 1, height: 60, backgroundColor: "#fff" }}
        >
            <Container
                maxWidth="lg"
                sx={{ padding: { lg: "0px !important" } }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        backgroundColor: "#fff",
                        height: 60,
                        paddingX: { xs: "10px", sm: "20px" },
                    }}
                >
                    <div>
                        <a href="../main.jsx" style={{ textDecoration: "none" }}>
                            <h1 style={{ margin: 0, fontSize: "18px", fontWeight: "bold", color: "#333" }}>G&M Providers</h1>
                        </a>
                    </div>
                    <Stack
                        direction={"row"}
                        alignItems="center"
                        spacing={4}
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {navLinks.map((link, index) => {
                            return (
                                <a key={index} href={link.path} style={{ textDecoration: "none" }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textTransform: "uppercase",
                                            cursor: "pointer",
                                            fontWeight: 400,
                                            fontSize: 15,
                                            color: link.active ? "#f5455c" : "#333",
                                        }}
                                    >
                                        {link.title}
                                    </Typography>
                                </a>
                            );
                        })}
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems={"center"}
                        spacing={2}
                    >
                        <img
                            src={search}
                            alt="search"
                            style={{ cursor: "pointer", width: "15px", height: "15px" }}
                        />
                        <img
                            src={profile}
                            alt="profile"
                            style={{ cursor: "pointer", width: "15px", height: "15px" }}
                        />
                        <div style={{ position: "relative" }}>
                            <img
                                src={cart}
                                alt="cart"
                                style={{ cursor: "pointer", width: "15px", height: "15px" }}
                            />
                            <span style={{ position: "absolute", top: -5, right: -10, background: "red", color: "white", borderRadius: "50%", padding: "3px", fontSize: "8px" }}>{cartItemsCount}</span>
                        </div>
                    </Stack>
                    <Menu
                        color="black"
                        sx={{ display: { md: "none", xs: "flex" }, cursor: "pointer", fontSize: "15px" }}
                    />
                </Stack>
            </Container>
        </Stack>
    );
};

export default Navbar;
