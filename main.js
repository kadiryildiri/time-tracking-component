const dailyBtn = document.querySelector("#dailyBtn")
const weeklyBtn = document.querySelector("#weeklyBtn")
const monthlyBtn = document.querySelector("#monthlyBtn")
const workHours = document.querySelector("#workHours")
const lastWorkHours = document.querySelector("#lastWorkHours")
const playHours = document.querySelector("#playHours")
const lastPlayHours = document.querySelector("#lastPlayHours")
const studyHours = document.querySelector("#studyHours")
const lastStudyHours = document.querySelector("#lastStudyHours")
const exerciseHours = document.querySelector("#exerciseHours")
const lastExerciseHours = document.querySelector("#lastExerciseHours")
const socialHours = document.querySelector("#socialHours")
const lastSocialHours = document.querySelector("#lastSocialHours")
const selfcareHours = document.querySelector("#selfcareHours")
const lastSelfcareHours = document.querySelector("#lastSelfcareHours")

const getData = async () => {
    const response = await fetch("data.json")
    const data = await response.json()
    return data
}

const getWorkData = async () => {
    const workData = await getData()
    return workData[0]
}

const getPlayData = async () => {
    const playData = await getData()
    return playData[1]
}

const getStudyData = async () => {
    const studyData = await getData()
    return studyData[2]
}

const getExerciseData = async () => {
    const exerciseData = await getData()
    return exerciseData[3]
}

const getSocialData = async () => {
    const socialData = await getData()
    return socialData[4]
}

const getSelfcareData = async () => {
    const selfcareData = await getData()
    return selfcareData[5]
}

dailyBtn.addEventListener("click", async () => {
    dailyBtn.classList.remove("text-white/50")
    dailyBtn.classList.add("text-white")
    weeklyBtn.classList.remove("text-white")
    weeklyBtn.classList.add("text-white/50")
    monthlyBtn.classList.remove("text-white")
    monthlyBtn.classList.add("text-white/50")

    const work = await getWorkData()
    workHours.innerHTML = `${work.timeframes.daily.current}`
    lastWorkHours.innerHTML = `${work.timeframes.daily.previous}`

    const play = await getPlayData()
    playHours.innerHTML = `${play.timeframes.daily.current}`
    lastPlayHours.innerHTML = `${play.timeframes.daily.previous}`

    const study = await getStudyData()
    studyHours.innerHTML = `${study.timeframes.daily.current}`
    lastStudyHours.innerHTML = `${study.timeframes.daily.previous}`

    const exercise = await getExerciseData()
    exerciseHours.innerHTML = `${exercise.timeframes.daily.current}`
    lastExerciseHours.innerHTML = `${exercise.timeframes.daily.previous}`

    const socail = await getSocialData()
    socialHours.innerHTML = `${socail.timeframes.daily.current}`
    lastSocialHours.innerHTML = `${socail.timeframes.daily.previous}`

    const selfcare = await getSelfcareData()
    selfcareHours.innerHTML = `${selfcare.timeframes.daily.current}`
    lastSelfcareHours.innerHTML = `${selfcare.timeframes.daily.previous}`
})

weeklyBtn.addEventListener("click", async () => {
    weeklyBtn.classList.remove("text-white/50")
    weeklyBtn.classList.add("text-white")
    dailyBtn.classList.remove("text-white")
    dailyBtn.classList.add("text-white/50")
    monthlyBtn.classList.remove("text-white")
    monthlyBtn.classList.add("text-white/50")

    const work = await getWorkData()
    workHours.innerHTML = `${work.timeframes.weekly.current}`
    lastWorkHours.innerHTML = `${work.timeframes.weekly.previous}`

    const play = await getPlayData()
    playHours.innerHTML = `${play.timeframes.weekly.current}`
    lastPlayHours.innerHTML = `${play.timeframes.weekly.previous}`

    const study = await getStudyData()
    studyHours.innerHTML = `${study.timeframes.weekly.current}`
    lastStudyHours.innerHTML = `${study.timeframes.weekly.previous}`

    const exercise = await getExerciseData()
    exerciseHours.innerHTML = `${exercise.timeframes.weekly.current}`
    lastExerciseHours.innerHTML = `${exercise.timeframes.weekly.previous}`

    const socail = await getSocialData()
    socialHours.innerHTML = `${socail.timeframes.weekly.current}`
    lastSocialHours.innerHTML = `${socail.timeframes.weekly.previous}`

    const selfcare = await getSelfcareData()
    selfcareHours.innerHTML = `${selfcare.timeframes.weekly.current}`
    lastSelfcareHours.innerHTML = `${selfcare.timeframes.weekly.previous}`
})

monthlyBtn.addEventListener("click", async () => {
    monthlyBtn.classList.remove("text-white/50")
    monthlyBtn.classList.add("text-white")
    dailyBtn.classList.remove("text-white")
    dailyBtn.classList.add("text-white/50")
    weeklyBtn.classList.remove("text-white")
    weeklyBtn.classList.add("text-white/50")

    const work = await getWorkData()
    workHours.innerHTML = `${work.timeframes.monthly.current}`
    lastWorkHours.innerHTML = `${work.timeframes.monthly.previous}`

    const play = await getPlayData()
    playHours.innerHTML = `${play.timeframes.monthly.current}`
    lastPlayHours.innerHTML = `${play.timeframes.monthly.previous}`

    const study = await getStudyData()
    studyHours.innerHTML = `${study.timeframes.monthly.current}`
    lastStudyHours.innerHTML = `${study.timeframes.monthly.previous}`

    const exercise = await getExerciseData()
    exerciseHours.innerHTML = `${exercise.timeframes.monthly.current}`
    lastExerciseHours.innerHTML = `${exercise.timeframes.monthly.previous}`

    const socail = await getSocialData()
    socialHours.innerHTML = `${socail.timeframes.monthly.current}`
    lastSocialHours.innerHTML = `${socail.timeframes.monthly.previous}`

    const selfcare = await getSelfcareData()
    selfcareHours.innerHTML = `${selfcare.timeframes.monthly.current}`
    lastSelfcareHours.innerHTML = `${selfcare.timeframes.monthly.previous}`
})
