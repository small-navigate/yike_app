export default (params) => {
  params.url = 'http://192.168.101.13:3000/api' + params.url
  return new Promise((resolve, reject) => {
    uni.request({
      ...params,
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        err
      },
      complete: () => {}
    });
  })
}