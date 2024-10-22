export const generateObjClassToStr = (obj => {
    let strClass = ''
    Object.entries(obj).forEach(([key, val]) => {
        if (!val) return
        strClass = strClass.concat(' ', key?.trim())
    })

    return strClass
})