import { type RouteConfig } from "@react-router/dev/routes";

export default [
    // This is a layout route object.
    // It has a 'file' for its component and a 'children' array.
    {
        file: "routes/admin/admin-layout.tsx",
        children: [
            // This is a child route, nested inside the layout.
            {
                path: "dashboard",
                file: "routes/admin/dashboard.tsx",
            },
            {
                path: "all-users",
                file: "routes/admin/all-users.tsx",
            },
            // You can add more child routes here
            // {
            //     path: "users",
            //     file: "routes/admin/users.tsx"
            // }
        ],
    },
] satisfies RouteConfig;