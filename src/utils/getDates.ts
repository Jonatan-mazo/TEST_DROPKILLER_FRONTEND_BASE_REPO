export const getDates = () => {
  const tomorrow = new Date(Date.now());
  const today = new Date(Date.now());
  const yesterday = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
  const last7days = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  const last14days = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
  const last30days = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  const formartedTomorrow = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1 < 10 ? `0${tomorrow.getMonth() + 1}` : tomorrow.getMonth() + 1}-${tomorrow.getDate() < 10 ? `0${tomorrow.getDate()}` : tomorrow.getDate()}`
  const formartedToday = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1}-${today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()}`
  const formartedYesterday = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1 < 10 ? `0${yesterday.getMonth() + 1}` : yesterday.getMonth() + 1}-${yesterday.getDate() < 10 ? `0${yesterday.getDate()}` : yesterday.getDate()}`
  const formartedLast7Days = `${last7days.getFullYear()}-${last7days.getMonth() + 1 < 10 ? `0${last7days.getMonth() + 1}` : last7days.getMonth() + 1}-${last7days.getDate() < 10 ? `0${last7days.getDate()}` : last7days.getDate()}`
  const formartedLast14Days = `${last14days.getFullYear()}-${last14days.getMonth() + 1 < 10 ? `0${last14days.getMonth() + 1}` : last14days.getMonth() + 1}-${last14days.getDate() < 10 ? `0${last14days.getDate()}` : last14days.getDate()}`
  const formartedLast30Days = `${last30days.getFullYear()}-${last30days.getMonth() + 1 < 10 ? `0${last30days.getMonth() + 1}` : last30days.getMonth() + 1}-${last30days.getDate() < 10 ? `0${last30days.getDate()}` : last30days.getDate()}`

  return {
    today: `${formartedYesterday}/${formartedToday}`,
    tomorrow: `${formartedTomorrow}`,
    last7days: `${formartedLast7Days}/${formartedToday}`,
    last14days: `${formartedLast14Days}/${formartedToday}`,
    last30days: `${formartedLast30Days}/${formartedToday}`
  }
}