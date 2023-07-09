import './App.css';
import AddEvent from './components/AddEvent';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchEvent from './components/SearchEvent';
import { useState,useEffect } from 'react';
import ApiRequst from './components/ApiRequst';

function App() {

    const API_URL = 'http://localhost:3500/items'

    const [work,setWork] = useState([])
    const [newEvent,setNewEvent] = useState("")
    const [search,setSearch] = useState("")
    const [fetchError,setFetchError] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async() => {
            try{
                const response = await fetch(API_URL)
                if(!response.ok) throw Error("Data not found")
                const listItems = await response.json()
                console.log(listItems[0].checked)
                setWork(listItems)
                setFetchError(null)
            }
            catch(error){
                setFetchError(error.message)
            }
            finally{
                setIsLoading(false)
            }
        }
        setTimeout(() => {
            (async () => await fetchItems())()
        },2000)
    }
    ,[])

    const handleChange = async (id) => {
        const newList = work.map((item) => item.id === id ? {...item,checked : !item.checked} : item)
        setWork(newList)
        const item = work.filter((item)=>item.id)
        const updateObject = {
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({checked:item[0].checked})
        }
        const reqUrl = `${API_URL}/${id}`
        const result = await ApiRequst(reqUrl,updateObject)
        if(result) setFetchError(result)
    }

    const handleDelete = async (id) => {
        const newList = work.filter((item) => item.id !== id )
        setWork(newList)
        const deleteObject = {
            method:'DELETE'
        }
        const reqUrl = `${API_URL}/${id}`
        const result = await ApiRequst(reqUrl,deleteObject)
        if(result) setFetchError(result)
   }

    const addEvent = async(newEvent) => {
        const id = work.length? work[work.length -1].id +1 : 1
        
        const newWork = {
            id,
            event : newEvent,
            checked:false,
        } 
        const NewWorks = [...work,newWork] 
        setWork(NewWorks)
        const postObject = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newWork)
        }
        console.log("String: ",JSON.stringify(newWork))
        const result =await ApiRequst(API_URL,postObject)
        if (result) setFetchError(result)
    }

    const handleNewEvent = (e) => {
        e.preventDefault()
        if(!newEvent)return
        addEvent(newEvent)
        setNewEvent('')
    }

    return (
        <div className="App">
        <Header/>
        <AddEvent
            newEvent = {newEvent}
            setNewEvent = {setNewEvent}
            handleNewEvent = {handleNewEvent}
        />
        <SearchEvent
            search={search}
            setSearch={setSearch}
        />
        <main>
            { fetchError && <p>{`Error : ${fetchError}`}</p>}
            {isLoading && <p>Loading Items....</p>}
            {!fetchError && !isLoading &&
                <Content 
                    work = {work.filter(item => (item.event.toLowerCase()).includes(search.toLowerCase()))}
                    handleChange = {handleChange}
                    handleDelete = {handleDelete}
                />
            }
        </main>
        <Footer
            work = {work}
        />
        </div>
    );
}

export default App;
