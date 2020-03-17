import React, { useState, useEffect } from 'react';

//Axios
import Axios from 'axios';
// uuid
import {v4 as uuidv4} from 'uuid';

// Core
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
//Component
import TranslateBody from './TranslateBody';


const TranslateMain = (props) => {
    const {
        translatePopOpen,
        translateAnchorEl,
    } = props

    const {
        handleTranslateClose
    } = props;

    const [sourceData, setSourceData] = useState({
        text: '',
        language: 'en'
    });
    const [targetData, setTargetData] = useState({
        text: '',
        language: 'ko'
    })

    const [multipleTargetData, setMultipleTargetData] = useState([
        // {
        //     id:uuidv4(),
        //     classify:'google',
        //     text: '',
        //     language: 'ko'
        // },
        // {
        //     id:uuidv4(),
        //     classify:'papago',
        //     text: '',
        //     language: 'ko'
        // },
        // {
        //     id:uuidv4(),
        //     classify:'amazon',
        //     text: '',
        //     language: 'ko'
        // }
    ])
    const [addTranslatorDialOpen, setAddTranslatorDialOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(()=>{
        userCheck();
        initForm();
        setMultipleTargetData(JSON.parse(localStorage.getItem('trans_list')));
    },[])

    const userCheck = ()=>{
        if(localStorage.getItem('mulTrans_userId')){
            return;
        }else{
            localStorage.setItem('mulTrans_userId', uuidv4());
        }
    }

    const initForm = ()=>{
        if(localStorage.getItem('trans_list')){
            return;
        }else{
            localStorage.setItem('trans_list',JSON.stringify(
                [
                    {
                        id:uuidv4(),
                        classify:'google',
                        text: '',
                        language: 'ko'
                    },
                    {
                        id:uuidv4(),
                        classify:'papago',
                        text: '',
                        language: 'ko'
                    },
                    {
                        id:uuidv4(),
                        classify:'amazon',
                        text: '',
                        language: 'ko'
                    }
                ]
            ));
        }
    }
    const handleRunTranslate = async () => {
        if(sourceData.text.length>4000 || sourceData.text.length<=0){
            return;
        }

        multipleTargetData.map(async trans=>{
            switch(trans.classify){
                case 'google':
                    await googleTranslateApi(trans);
                    break;
                case 'amazon':
                    await amazonTranslateApi(trans);
                    break;
                case 'papago':
                    await papagoTranslateApi(trans);
                    break;
                default:break;
            }
        })

        // Axios.post(`/api/service/extend/translate/papago`,{
        //     sourceText:sourceData.text,
        //     sourceLanguage:sourceData.language,
        //     targetLanguage:targetData.language
        // },{
        //     headers: {
        //         // Authorization: 'Bearer ' + AuthKey
        //     }
        // })
        // .then(res=>res.data)
        // .then(data=>{
        //     if(data.message==='success'){
        //         // document.getElementById('translate-result-side').scrollIntoView({
        //         //     block:'center'
        //         // });
        //         setTargetData({...targetData,text:data.ret.message.result.translatedText})
                
        //     }else if(data.message==='non-sourceText'){
        //         alert('텍스트를 입력해주세요.');
        //     }else{
        //         alert('undefined');
        //     }
        // })
    }

    const googleTranslateApi = (jsonData)=>{
        return Axios.post(`/api/translate/google`,{
            sourceData:sourceData,
            targetData:jsonData
        })
        .then(res=>res.data)
        .then(data=>{
            // console.log(data);
            if(data.message==='success'){
                for(let i = 0 ; i< multipleTargetData.length; i++){
                    // console.log(multipleTargetData[i].text);
                    if(multipleTargetData[i].id===data.targetData.id){
                        setMultipleTargetData(
                            [...multipleTargetData],
                            multipleTargetData[i].text=data.translatedText
                        )
                    }
                    
                }
                // setMultipleTargetData(multipleTargetData.map(row=>{
                //     console.log(row);
                //     return(
                //         row.id === data.targetData.id ?
                //         {
                //             ...row,
                //             text:data.translatedText
                //         }
                //         :
                //         row
                //     );
                // }))
            }else if(data.message==='checkLanguage'){
                alert(`check the language, source and target languages doesn\'t same.(hint:${jsonData.classify} translator)`);
            }else{
                alert('undefined');
            }
        })
    }

    const papagoTranslateApi = (jsonData)=>{
        return Axios.post(`/api/translate/papago`,{
            sourceData:sourceData,
            targetData:jsonData
        })
        .then(res=>res.data)
        .then(data=>{
            // console.log(data);
            if(data.message==='success'){
                for(let i = 0 ; i< multipleTargetData.length; i++){
                    // console.log(multipleTargetData[i].text);
                    if(multipleTargetData[i].id===data.targetData.id){
                        setMultipleTargetData(
                            [...multipleTargetData],
                            multipleTargetData[i].text=data.translatedText
                        )
                    }
                    
                }
                // setMultipleTargetData(multipleTargetData.map(row=>{
                //     console.log(row);
                //     return(
                //         row.id === data.targetData.id ?
                //         {
                //             ...row,
                //             text:data.translatedText
                //         }
                //         :
                //         row
                //     );
                // }))
            }else if(data.message==='checkLanguage'){
                alert(`check the language, source and target languages doesn\'t same.(hint:${jsonData.classify} translator)`);
            }else{
                alert('undefined');
            }
        })
    }

    const amazonTranslateApi = (jsonData)=>{
        return Axios.post(`/api/translate/amazon`,{
            sourceData:sourceData,
            targetData:jsonData
        })
        .then(res=>res.data)
        .then(data=>{
            // console.log(data);
            if(data.message==='success'){
                for(let i = 0 ; i< multipleTargetData.length; i++){
                    if(multipleTargetData[i].id===data.targetData.id){
                        setMultipleTargetData(
                            [...multipleTargetData],
                            multipleTargetData[i].text=data.translatedText
                        )
                    }
                    
                }
                // setMultipleTargetData(multipleTargetData.map(row=>{
                //     console.log(row);
                //     return(
                //         row.id === data.targetData.id ?
                //         {
                //             ...row,
                //             text:data.translatedText
                //         }
                //         :
                //         row
                //     );
                // }))
                
            }else if(data.message==='checkLanguage'){
                alert(`check the language, source and target languages doesn\'t same.(hint:${jsonData.classify} translator)`);
            }else{
                alert('undefined');
            }
        })
    }

    const handleSourceTextChange = (e) => {
        if(e.target.value.length>4000){
            return;
        }
        setSourceData({ ...sourceData, text: e.target.value })
    }

    const handleLanguageChange = (target, e) =>{
        if(target==='source'){
            setSourceData({ ...sourceData, language: e.target.value })
        }else if(target==='target'){
            setTargetData({ ...targetData, language: e.target.value })
            setMultipleTargetData(multipleTargetData.map(row=>{
                return(
                    {
                        ...row,
                        language:e.target.value
                    }
                );
            }))
        }else{
            setMultipleTargetData(multipleTargetData.map(row=>{
                return(
                    row.id === target.id ?
                    {
                        ...row,
                        language:e.target.value
                    }
                    :
                    row
                )
            }))
        }
    }

    const handleExchangeLanguages =(sourceLan, targetLan)=>{
        setSourceData({ ...sourceData, language: targetLan })
        setTargetData({ ...targetData, language: sourceLan })
        setMultipleTargetData(multipleTargetData.map(row=>{
            return(
                {
                    ...row,
                    language:sourceLan
                }
            );
        }))
    }

    const openAddTranslatorDial = ()=>{
        setAddTranslatorDialOpen(true);
    }
    const closeAddTranslatorDial = ()=>{
        setAddTranslatorDialOpen(false);
    }

    const handleAddNewTranslator = (type) =>{
        switch(type){
            case 'google':
                addNewTranslatorToLocalStorage('google');
                closeAddTranslatorDial();
                break;
            case 'papago':
                addNewTranslatorToLocalStorage('papago');
                closeAddTranslatorDial();
                break;
            case 'amazon':
                addNewTranslatorToLocalStorage('amazon');
                closeAddTranslatorDial();
                break;
            default:break;
        }
    }

    const addNewTranslatorToLocalStorage = async(type) =>{
        let array = JSON.parse(localStorage.getItem('trans_list'));
        // console.log(array);
        if(array.length>4){
            return handleSnackbarOpen('번역기는 최대 5개만 추가 가능합니다.');
        }else{
            await array.push({
                id:uuidv4(),
                classify:type,
                text: '',
                language: 'ko'
            })
            // console.log(array);
            await localStorage.setItem('trans_list',JSON.stringify(array));
            await setMultipleTargetData(JSON.parse(localStorage.getItem('trans_list')));
        }
    }
    const handleSnackbarOpen = (message) =>{
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    }
    const handleSnackbarClose = () =>{
        setSnackbarOpen(false);
    }

    const deleteTranslator = async(data)=>{
        // console.log(data);
        let array = JSON.parse(localStorage.getItem('trans_list'));
        if(array.length<=1){
            return handleSnackbarOpen('최소 하나의 번역기를 유지해야 합니다.');
        }else{
            await localStorage.setItem('trans_list',JSON.stringify(array.filter(idx=>idx.id!==data.id)));
            await setMultipleTargetData(JSON.parse(localStorage.getItem('trans_list')));
        }
    }
    return (
        <div>
            <TranslateBody
                sourceData={sourceData}
                targetData={targetData}
                multipleTargetData={multipleTargetData}
                translatePopOpen={translatePopOpen}
                translateAnchorEl={translateAnchorEl}
                addTranslatorDialOpen={addTranslatorDialOpen}

                handleTranslateClose={handleTranslateClose}
                handleRunTranslate={handleRunTranslate}
                handleSourceTextChange={handleSourceTextChange}
                handleLanguageChange={handleLanguageChange}
                handleExchangeLanguages={handleExchangeLanguages}
                openAddTranslatorDial={openAddTranslatorDial}
                deleteTranslator={deleteTranslator}
                closeAddTranslatorDial={closeAddTranslatorDial}
                handleAddNewTranslator={handleAddNewTranslator}
            />
            <Snackbar
                open={snackbarOpen}
                onClose={handleSnackbarClose}
                transitionDuration={1000}
                autoHideDuration={3000}
                message={snackbarMessage}
            />
        </div>
    );
}

export default TranslateMain;