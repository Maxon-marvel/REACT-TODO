const ApiRequst = async(url='',object=null,error=null) => {
    try {
        const result = await fetch(url,object)
        if(!result.ok) throw Error("Reload the site")
    } catch (err) {
        error = err.message
    }
    finally{
        return error
    }
}

export default ApiRequst