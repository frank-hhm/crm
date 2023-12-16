import { request } from '@/utils/request/default'
export const getListAdminApi = (params: any) => {
    return request({
        url: `system.admin/list`,
        method: 'GET',
        params
    })
}
export const createAdminApi = (data: any) => {
    return request({
        url: 'system.admin/create',
        method: 'POST',
        data
    })
}
export const updateAdminApi = (data: any) => {
    return request({
        url: `system.admin/update`,
        method: 'PUT',
        data
    })
}
export const getDetailAdminApi = (params: any) => {
    return request({
        url: 'system.admin/detail',
        method: 'GET',
        params
    })
}
export const getDefaultDetailApi = () => {
    return request({
        url: 'system.admin/defaultDetail',
        method: 'GET'
    })
}

export const updateStatusAdminApi = (data: any) => {
    return request({
        url: `system.admin/status`,
        method: 'PUT',
        data
    })
}
export const updatePassAdminApi = (data: any) => {
    return request({
        url: `system.admin/updatePass`,
        method: 'PUT',
        data
    })
}

export const deleteAdminApi = (params: { id: number | string }) => {
    return request({
        url: `system.admin/delete`,
        method: 'DELETE',
        params
    })
}