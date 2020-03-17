import React, { useState, useEffect } from 'react';

//Axios
import Axios from 'axios';
// uuid
import {v4 as uuidv4} from 'uuid';
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
    ])

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


    return (
        <div>
            <TranslateBody
                sourceData={sourceData}
                targetData={targetData}
                multipleTargetData={multipleTargetData}
                translatePopOpen={translatePopOpen}
                translateAnchorEl={translateAnchorEl}

                handleTranslateClose={handleTranslateClose}
                handleRunTranslate={handleRunTranslate}
                handleSourceTextChange={handleSourceTextChange}
                handleLanguageChange={handleLanguageChange}
                handleExchangeLanguages={handleExchangeLanguages}
            />
        </div>
    );
}

export default TranslateMain;