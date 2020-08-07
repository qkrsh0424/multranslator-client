import React from 'react';
import styled from 'styled-components';

const MtlListWrapper = styled.div`
    // border:1px solid #f1f1f1;
    // border-radius: 15px;
    padding:15px;
    font-family: -apple-system,BlinkMacSystemFont,'Malgun Gothic','맑은 고딕',helvetica,'Apple SD Gothic Neo',sans-serif;
    line-height:1.5;
`;

const MtlListGroup = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const MtlListItem = styled.li`
    border:1px solid #f1f1f1;
    border-radius:15px;
    padding: 20px;
    margin-top:8px;
`;

const MtlListHeadPart = styled.div`
    font-weight:700;
    font-size:18px;
    padding:8px;
    font-family: -apple-system,BlinkMacSystemFont,'Malgun Gothic','맑은 고딕',helvetica,'Apple SD Gothic Neo',sans-serif;
`

const MtlListBodyPart = styled.div`
    padding:8px 0 ;
    font-family: -apple-system,BlinkMacSystemFont,'Malgun Gothic','맑은 고딕',helvetica,'Apple SD Gothic Neo',sans-serif;
`

const MtlMemo = styled.div`
    font-size:13px;
    text-align:center;
`
const UpdateNoteBody = (props) => {
    return (
        <div>
            <MtlListWrapper>
                <h3 style={{ paddingLeft: '15px' }}>업데이트 노트</h3>
                <MtlMemo>
                    <p>더욱 효과적인 사용성을 제공하기 위해 이용자분들의 수정사항을 꾸준히 반영하고 있습니다.</p>
                    <p>오류 개선 및 수정사항은 pcysynabro.ads@gmail.com 으로 메일 보내주시면 빠른 시일 내에 반영토록 하겠습니다. </p>
                    <p>감사합니다.</p>
                </MtlMemo>
                <MtlListGroup>
                    <MtlListItem>
                        <MtlListHeadPart>2020.08.07</MtlListHeadPart>
                        <MtlListBodyPart>
                            <ul>
                                <li>업데이트 노트를 추가하였습니다.</li>
                                <li>버튼 기능들의 위치를 수정하였습니다. </li>
                                <li>일부 레이아웃 및 디자인을 수정하였습니다.</li>
                            </ul>
                        </MtlListBodyPart>
                    </MtlListItem>
                    <MtlListItem>
                        <MtlListHeadPart>2020.07.24</MtlListHeadPart>
                        <MtlListBodyPart>내용 전체 복사 기능을 추가 하였습니다.</MtlListBodyPart>
                    </MtlListItem>
                    {/* <MtlListItem>
                        hello2
                    </MtlListItem> */}
                </MtlListGroup>
            </MtlListWrapper>
        </div>
    );
}

export default UpdateNoteBody;