export default [
    {
        path: `/system/config`,
        name: `systemConfig`,
        component: () => import("@/views/system/config/index.vue"),
        meta: {
            auth: 'system-config',
            menu_name: "系统设置",
        },
    },
    {
        path: `/system/menus/list`,
        name: `systemConfigMenus`,
        component: () => import("@/views/system/menus/list.vue"),
        meta: {
            auth: 'system-menus-list',
            menu_name: "菜单管理",
        },
    },
    {
        path: `/system/role/list`,
        name: `systeMrole`,
        component: () => import("@/views/system/role/list.vue"),
        meta: {
            auth: 'system-role-list',
            menu_name: "权限管理",
        },
    },
    {
        path: `/system/admin/list`,
        name: `systemAdmin`,
        component: () => import("@/views/system/admin/list.vue"),
        meta: {
            auth: 'system-admin-list',
            menu_name: "管理员",
        },
    },
    {
        path: `/system/organization/department`,
        name: `systemOrganizationDepartment`,
        component: () => import("@/views/system/organization/department/list.vue"),
        meta: {
            auth: 'system-organization-department',
            menu_name: "部门管理",
        },
    },
    
    {
        path: `/system/organization/position`,
        name: `systemOrganizationPosition`,
        component: () => import("@/views/system/organization/position/list.vue"),
        meta: {
            auth: 'system-organization-position',
            menu_name: "职位管理",
        },
    },
]