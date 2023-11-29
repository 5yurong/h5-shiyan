// @ts-ignore
import qs from 'qs'
const baseUrl = 'http://113.56.40.34:8048'

async function getAccessToken() {
  const res = await fetch(`${baseUrl}/auth/oauth/token`, {
    method: 'POST',
    cache: 'force-cache',
    body: qs.stringify({
      systemTag: 'PC',
      username: '管理员2',
      password: '202cb962ac59075b964b07152d234b70',
      grant_type: 'inner',
    }),
    headers: {
      Authorization: 'Basic Y20td2ViOmNtLXdlYg==', // 添加 Authorization 头部
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })

  const result = await res.json()
  console.log(result, 'res')
  return result?.result?.accessToken
}

export function createCityRequest(path: string, token: string, opts: any = {}) {
  return fetch(`${baseUrl}${path}`, {
    ...opts,
    headers: {
      ...opts.headers,
      Authorization: `Bearer ${token}`,
    },
  })
}

export async function fetchCity(path: string, opts: RequestInit = {}) {
  const token = await getAccessToken()
  console.log(token, 'token')
  let req = createCityRequest(path, token, opts)

  return req
}

export async function fetchToiletList() {
  const res = await fetchCity('/toilet/toilet/management/list', {
    method: 'GET',
    cache: 'force-cache',
  })

  const result = await res.json()
  return result?.result
}

// 字典
export async function fetchDics(ParentCode: any) {
  const res = await fetch(
    `${baseUrl}/toilet/dic/getdics?ParentCode=${ParentCode}`,
    {
      method: 'GET',
      cache: 'force-cache',
      headers: {
        Authorization: 'Bearer 9666009b-80fc-4d08-ae19-b25d8a07cc54', // 添加 Authorization 头部
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )

  const result = await res.json()
  return result?.result
}
