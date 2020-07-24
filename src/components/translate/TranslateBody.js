import React from 'react';

//styled-component
import styled from 'styled-components';

//Core
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import CachedIcon from '@material-ui/icons/CachedOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
const Container = styled.div`
    padding:15px;
`;

const LeftAreaWrapper = styled.div`
    margin:8px;
    padding:15px;
    border:1px solid #f1f1f1;
    border-radius:15px;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);

    .warningText{
        font-size:10px;
    }
    .textLength{
        font-size:13px;
        font-weight:600;
    }
`;

const LeftAreaFooter = styled.div`
    overflow:auto;
    .mtl-float-left{
        float:left;
    }
    .mtl-float-right{
        float:right;
    }
`;
const RightAreaWrapper = styled.div`
    margin:8px;
    padding:8px;
    border:1px solid #f1f1f1;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
`;

const TargetGoogleAreaWrapper = styled.div`
    margin:8px;
    padding:15px;
    border:1px solid #f1f1f1;
    border-radius:15px;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);

    // 배경투명하게 하는 css
    position: relative;
    &:after{
        content : "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        // background:url("https://multi-translator.s3.ap-northeast-2.amazonaws.com/%EA%B8%B0%EC%97%85%EB%A1%9C%EA%B3%A0/%E1%84%80%E1%85%AE%E1%84%80%E1%85%B3%E1%86%AF%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg") no-repeat center center;
        background:url("/googleImg.jpg") no-repeat center center;
        width: 100%;
        height: 100%;
        opacity : 0.2;
        z-index: -1;
    }
    
`;

const TargetPapagoAreaWrapper = styled.div`
    margin:8px;
    padding:15px;
    border:1px solid #f1f1f1;
    border-radius:15px;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);

    // 배경투명하게 하는 css
    position: relative;
    &:after{
        content : "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        // background:rgba(255,255,255,0.2) url("https://multi-translator.s3.ap-northeast-2.amazonaws.com/%EA%B8%B0%EC%97%85%EB%A1%9C%EA%B3%A0/%E1%84%91%E1%85%A1%E1%84%91%E1%85%A1%E1%84%80%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png") no-repeat center center;
        background:rgba(255,255,255,0.2) url("/papagoImg.png") no-repeat center center;
        width: 100%;
        height: 100%;
        opacity : 0.2;
        z-index: -1;
    }
`;

const TargetAmazonAreaWrapper = styled.div`
    margin:8px;
    padding:15px;
    border:1px solid #f1f1f1;
    border-radius:15px;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);

    // 배경투명하게 하는 css
    position: relative;
    &:after{
        content : "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        // background:rgba(255,255,255,0.2) url("https://multi-translator.s3.ap-northeast-2.amazonaws.com/%EA%B8%B0%EC%97%85%EB%A1%9C%EA%B3%A0/%E1%84%8B%E1%85%A1%E1%84%86%E1%85%A1%E1%84%8C%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png") no-repeat center center;
        background:rgba(255,255,255,0.2) url("/amazonImg.png") no-repeat center center;
        width: 100%;
        height: 100%;
        opacity : 0.2;
        z-index: -1;
    }
    
`;

const AddTranslatorWrapper = styled.div`
    margin:8px;
    padding:15px;
    border:1px solid #f1f1f1;
    border-radius:15px;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
    text-align:center;
`;

const LanguageSelectorWrapper = styled.div`
    margin:8px;
`;


const LeftTextArea = styled.textarea`
    border:1px solid #f1f1f1;
    border-radius:15px;
    width:100%;
    height:200px;

    line-height: 1.6;
    font-size: 20px;
    font-family: NanumSquare,Dotum,"돋움",Helvetica,AppleSDGothicNeo,sans-serif;
    font-weight: 500;
`;

const TargetTextArea = styled.textarea`
    border:1px solid #f1f1f1;
    border-radius:15px;
    width:100%;
    height:200px;
    background:rgba(255,255,255,0.4);

    line-height: 1.6;
    // font-size: 20px;
    font-family: NanumSquare,Dotum,"돋움",Helvetica,AppleSDGothicNeo,sans-serif;
    font-weight: 500;
`;

const TranslateButtonEl = styled.div`
    text-align:center;
`;

const FormControlEl = styled(FormControl)`
    width:100px;
`;

// FR is float right
const DeleteIconButtonFREl = styled(IconButton)`
    float:right;
`;

const AddTransButtonEl = styled(Button)`
    margin:8px
`;
const FooterWrapper = styled.div`
    text-align:center;
    margin:50px 0;
    font-family: 'Nanum Pen Script', cursive
`

const CopyButton = styled.button`
    float:right
`
const TranslateBody = (props) => {
    const {
        sourceData,
        targetData,
        multipleTargetData,
        translatePopOpen,
        translateAnchorEl,
        addTranslatorDialOpen,
        fontSizeMtl
    } = props

    const {
        handleTranslateClose,
        handleRunTranslate,
        handleSourceTextChange,
        handleLanguageChange,
        handleExchangeLanguages,
        openAddTranslatorDial,
        deleteTranslator,
        closeAddTranslatorDial,
        handleAddNewTranslator,
        handleTextClear,
        handleChanegeFontSizeMtl,
        handleCopyToClipboard
    } = props;
    return (
        <Container>
            {/* {console.log(multipleTargetData)} */}
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <div style={{ padding: '10px', fontWeight: '600' }}>글자크기</div>
                    <Slider
                        value={fontSizeMtl}
                        // getAriaValueText={()=>{return 12}}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={10}
                        max={30}
                        onChange={handleChanegeFontSizeMtl}
                    />
                </Grid>

                <Grid item xs={12} sm={12}>
                    <LeftAreaWrapper className='clearfix'>
                        <h5 className='text-center'>내용</h5>

                        <LanguageSelectorWrapper>
                            <CopyButton onClick={(e)=>handleCopyToClipboard('textArea-sourceCopy',e)}>Copy</CopyButton>
                            <FormControlEl>
                                <InputLabel id="demo-simple-select-label">소스 언어</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sourceData.language}
                                    onChange={(e) => handleLanguageChange('source', e)}
                                >
                                    <MenuItem value={'ko'}>한국어</MenuItem>
                                    <MenuItem value={'en'}>영어</MenuItem>
                                    <MenuItem value={'zh-CN'}>중국어간체</MenuItem>
                                    <MenuItem value={'ja'}>일본어</MenuItem>
                                    <MenuItem value={'vi'}>베트남어</MenuItem>
                                    <MenuItem value={'de'}>독일어</MenuItem>
                                    <MenuItem value={'es'}>스페인어</MenuItem>
                                    <MenuItem value={'ru'}>러시아어</MenuItem>
                                    <MenuItem value={'it'}>이탈리아어</MenuItem>
                                    <MenuItem value={'fr'}>프랑스어</MenuItem>
                                    {/* <MenuItem value={'zh-TW'}>중국어번체</MenuItem> */}
                                </Select>
                            </FormControlEl>
                            <IconButton onClick={() => handleExchangeLanguages(sourceData.language, targetData.language)}>
                                <CachedIcon />
                            </IconButton>
                            <FormControlEl>
                                <InputLabel id="demo-simple-select-label">루트 타겟 언어</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={targetData.language}
                                    onChange={(e) => handleLanguageChange('target', e)}
                                >
                                    <MenuItem value={'ko'}>한국어</MenuItem>
                                    <MenuItem value={'en'}>영어</MenuItem>
                                    <MenuItem value={'zh-CN'}>중국어간체</MenuItem>
                                    <MenuItem value={'ja'}>일본어</MenuItem>
                                    <MenuItem value={'vi'}>베트남어</MenuItem>
                                    <MenuItem value={'de'}>독일어</MenuItem>
                                    <MenuItem value={'es'}>스페인어</MenuItem>
                                    <MenuItem value={'ru'}>러시아어</MenuItem>
                                    <MenuItem value={'it'}>이탈리아어</MenuItem>
                                    <MenuItem value={'fr'}>프랑스어</MenuItem>
                                    {/* <MenuItem value={'zh-TW'}>중국어번체</MenuItem> */}
                                </Select>
                            </FormControlEl>
                        </LanguageSelectorWrapper>
                        <LeftTextArea
                            // ref={textAreaRef}
                            id={`textArea-sourceCopy`}
                            value={sourceData.text}
                            onChange={handleSourceTextChange}
                            style={{ fontSize: `${fontSizeMtl}px` }}
                        >

                        </LeftTextArea>
                        {/* <span className='float-left text-danger warningText'>*현재는 200자 한정으로 번역을 지원하고 있습니다.</span> */}
                        <LeftAreaFooter>
                            <span className='mtl-float-left textLength'>{sourceData.text.length}/4000</span>
                            <Button
                                type='button'
                                className='mtl-float-right'
                                variant='outlined'
                                color='primary'
                                onClick={handleTextClear}
                            >모두 지우기</Button>
                        </LeftAreaFooter>

                    </LeftAreaWrapper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TranslateButtonEl>
                        <Button variant='outlined' onClick={handleRunTranslate}>번역하기</Button>
                    </TranslateButtonEl>
                </Grid>
                {multipleTargetData && multipleTargetData.map((target, index) => {
                    switch (target.classify) {
                        case 'google':
                            return (
                                <Grid item xs={12} sm={6} key={target.id}>
                                    <TargetGoogleAreaWrapper>
                                        <DeleteIconButtonFREl onClick={() => deleteTranslator(target)}>
                                            <DeleteIcon />
                                        </DeleteIconButtonFREl>
                                        <h5 className='text-center'>구글 번역기 결과</h5>
                                        <LanguageSelectorWrapper>
                                            <CopyButton onClick={(e)=>handleCopyToClipboard(target,e)}>Copy</CopyButton>
                                            <FormControlEl>
                                                <InputLabel id="demo-simple-select-label">타겟 언어</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={target.language}
                                                    onChange={(e) => handleLanguageChange(target, e)}
                                                >
                                                    <MenuItem value={'ko'}>한국어</MenuItem>
                                                    <MenuItem value={'en'}>영어</MenuItem>
                                                    <MenuItem value={'zh-CN'}>중국어간체</MenuItem>
                                                    <MenuItem value={'ja'}>일본어</MenuItem>
                                                    <MenuItem value={'vi'}>베트남어</MenuItem>
                                                    <MenuItem value={'de'}>독일어</MenuItem>
                                                    <MenuItem value={'es'}>스페인어</MenuItem>
                                                    <MenuItem value={'ru'}>러시아어</MenuItem>
                                                    <MenuItem value={'it'}>이탈리아어</MenuItem>
                                                    <MenuItem value={'fr'}>프랑스어</MenuItem>
                                                    {/* <MenuItem value={'zh-TW'}>중국어번체</MenuItem> */}
                                                </Select>
                                            </FormControlEl>
                                        </LanguageSelectorWrapper>
                                        <TargetTextArea
                                            id={`textArea-${target.id}`}
                                            value={target.text}
                                            placeholder={`${target.classify} translator...`}
                                            // readOnly
                                            style={{ fontSize: `${fontSizeMtl}px` }}
                                        >

                                        </TargetTextArea>
                                        <a href='https://translate.google.com/' target="_blank">출처 : 구글</a>
                                    </TargetGoogleAreaWrapper>
                                </Grid>
                            );
                        case 'papago':
                            return (
                                <Grid item xs={12} sm={6} key={target.id}>
                                    <TargetPapagoAreaWrapper>
                                        <DeleteIconButtonFREl onClick={() => deleteTranslator(target)}>
                                            <DeleteIcon />
                                        </DeleteIconButtonFREl>
                                        <h5 className='text-center'>파파고 번역기 결과</h5>
                                        <LanguageSelectorWrapper>
                                            <CopyButton onClick={(e)=>handleCopyToClipboard(target,e)}>Copy</CopyButton>
                                            <FormControlEl>
                                                <InputLabel id="demo-simple-select-label">타겟 언어</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={target.language}
                                                    onChange={(e) => handleLanguageChange(target, e)}
                                                >
                                                    <MenuItem value={'ko'}>한국어</MenuItem>
                                                    <MenuItem value={'en'}>영어</MenuItem>
                                                    <MenuItem value={'zh-CN'}>중국어간체</MenuItem>
                                                    <MenuItem value={'ja'}>일본어</MenuItem>
                                                    <MenuItem value={'vi'}>베트남어</MenuItem>
                                                    <MenuItem value={'de'}>독일어</MenuItem>
                                                    <MenuItem value={'es'}>스페인어</MenuItem>
                                                    <MenuItem value={'ru'}>러시아어</MenuItem>
                                                    <MenuItem value={'it'}>이탈리아어</MenuItem>
                                                    <MenuItem value={'fr'}>프랑스어</MenuItem>
                                                    {/* <MenuItem value={'zh-TW'}>중국어번체</MenuItem> */}
                                                </Select>
                                            </FormControlEl>
                                        </LanguageSelectorWrapper>
                                        <TargetTextArea
                                            id={`textArea-${target.id}`}
                                            value={target.text}
                                            placeholder={`${target.classify} translator...`}
                                            // readOnly
                                            style={{ fontSize: `${fontSizeMtl}px` }}
                                        >

                                        </TargetTextArea>
                                        <a href='https://papago.naver.com/' target="_blank">출처 : 네이버 파파고</a>
                                    </TargetPapagoAreaWrapper>
                                </Grid>
                            );
                        case 'amazon':
                            return (
                                <Grid item xs={12} sm={6} key={target.id}>
                                    <TargetAmazonAreaWrapper>
                                        <DeleteIconButtonFREl onClick={() => deleteTranslator(target)}>
                                            <DeleteIcon />
                                        </DeleteIconButtonFREl>
                                        <h5 className='text-center'>아마존 번역기 결과</h5>
                                        <LanguageSelectorWrapper>
                                            <CopyButton onClick={(e)=>handleCopyToClipboard(target,e)}>Copy</CopyButton>
                                            <FormControlEl>
                                                <InputLabel id="demo-simple-select-label">타겟 언어</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={target.language}
                                                    onChange={(e) => handleLanguageChange(target, e)}
                                                >
                                                    <MenuItem value={'ko'}>한국어</MenuItem>
                                                    <MenuItem value={'en'}>영어</MenuItem>
                                                    <MenuItem value={'zh-CN'}>중국어간체</MenuItem>
                                                    <MenuItem value={'ja'}>일본어</MenuItem>
                                                    <MenuItem value={'vi'}>베트남어</MenuItem>
                                                    <MenuItem value={'de'}>독일어</MenuItem>
                                                    <MenuItem value={'es'}>스페인어</MenuItem>
                                                    <MenuItem value={'ru'}>러시아어</MenuItem>
                                                    <MenuItem value={'it'}>이탈리아어</MenuItem>
                                                    <MenuItem value={'fr'}>프랑스어</MenuItem>
                                                    {/* <MenuItem value={'zh-TW'}>중국어번체</MenuItem> */}
                                                </Select>
                                            </FormControlEl>
                                        </LanguageSelectorWrapper>
                                        <TargetTextArea
                                            id={`textArea-${target.id}`}
                                            value={target.text}
                                            placeholder={`${target.classify} translator...`}
                                            // readOnly
                                            style={{ fontSize: `${fontSizeMtl}px` }}
                                        >

                                        </TargetTextArea>
                                        <a href='https://aws.amazon.com/translate/' target="_blank">출처 : AWS</a>
                                    </TargetAmazonAreaWrapper>
                                </Grid>
                            );
                    }
                })}
                <Grid item xs={12} sm={6}>
                    <AddTranslatorWrapper>
                        <IconButton onClick={openAddTranslatorDial}><AddIcon /></IconButton>
                    </AddTranslatorWrapper>
                </Grid>
            </Grid>
            <Dialog open={addTranslatorDialOpen} onClose={closeAddTranslatorDial}>
                <div style={{ padding: 30 }}>
                    <AddTransButtonEl type='button' color={"primary"} variant={"outlined"} onClick={() => handleAddNewTranslator('google')}>구글 번역기</AddTransButtonEl>
                    <AddTransButtonEl type='button' color={"primary"} variant={"outlined"} onClick={() => handleAddNewTranslator('papago')}>파파고 번역기</AddTransButtonEl>
                    <AddTransButtonEl type='button' color={"primary"} variant={"outlined"} onClick={() => handleAddNewTranslator('amazon')}>아마존 번역기</AddTransButtonEl>
                </div>
            </Dialog>
            <FooterWrapper>
                개발사 : PCY / 개발자 : 박세훈 qkrsh0424@gmail.com
                <br />
                github client : https://github.com/qkrsh0424/multranslator-client.git
                <br />
                github server : https://github.com/qkrsh0424/multranslator-server.git
                <br />
                <a href='https://play.google.com/store/apps/details?id=com.pcy.multrans&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width='200px' />
                </a>
            </FooterWrapper>
        </Container>
    );
}

export default TranslateBody;