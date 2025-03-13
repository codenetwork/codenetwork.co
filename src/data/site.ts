const projects = [
    {
        type: "link",
        title: "Projects Showcase",
        path: "/",
    },
    {
        type: "link",
        title: "Club Projects",
        path: "/",
    },
]

const nav = [
    {
        type: "link",
        title: "About Us",
        path: "/",
    },
    {
        type: "link",
        title: "Events",
        path: "/about",
    },
    {
        type: "dropdown",
        title: "Projects",
        path: "",
        content: projects
    },
    {
        type: "link",
        title: "Blog",
        path: "/",
    },

    {
        type: "link",
        title: "Why Us?",
        path: "/",
    },
]

export default { nav }