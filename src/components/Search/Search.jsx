import styles from'./Search.module.css'
import { useRef } from 'react';
import { FcSearch } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { setValue } from '../../features/basketCount/Search';
import { useSelector,useDispatch } from 'react-redux';
function Search() {
  const Value = useSelector(state=>state.search.value)
  const dispatch = useDispatch()
 const inputRef = useRef ()
 console.log(inputRef)
 const onclickClear = ()=>{
dispatch(setValue(''))
inputRef.current.focus()
 }
 function debouce  (fn,ms) {
let timeout 
return function (){
  const fnCall = () =>{
    fn.apply(this,arguments)
  }
  clearTimeout(timeout)
  timeout = setTimeout(()=>{
    fnCall()
  },ms)
  console.log('salut')
}

 }
 function onChangeInput  (e){
debouce(dispatch(setValue(e.target.value)),5000)

 }

    return (<div className={styles.wrapper}>
 <FcSearch className={styles.icon_search}/>
 {Value && <IoMdClose onClick={()=>onclickClear()} className={styles.clear_input} />}
         <input className={styles.input}
         ref = {inputRef}
         value ={Value} 
      type="text"
      placeholder="Поиск товаров..."
      onChange={e=>onChangeInput(e)}
      
   
    />
    
    </div>  );
}

export default Search;