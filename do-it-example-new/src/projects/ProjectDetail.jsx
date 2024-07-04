import React from 'react';



export default function ProjectDetail({project}) {
    function formatDate(dateString) {
        const date = new Date(dateString);
        // return date.toISOString().slice(0, 16).replace('T', ' ');
        return date.toLocaleString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    const TimeDisplay = ({ dateString }) => {
        const timeZone = 'Asia/Seoul'; // 원하는 타임존을 설정합니다.
        const date = new Date(dateString);

        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: timeZone,
        };

        // 'ko-KR'을 사용하여 한국어 형식으로 날짜를 표시합니다.
        const formattedDate = date.toLocaleString('ko-KR', options);

        // '2018. 08. 17. 03:49' 형식에서 불필요한 문자를 제거하여 '2018-08-17 03:49' 형식으로 변환
         // 날짜와 시간을 구분
        return formattedDate
            .replace(/[.:]/g, '') // 마침표를 대시로 변경
            .replace(/\s/g, '')  // 모든 공백 제거
            .replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/, '$1-$2-$3 $4:$5');
    };
return (
    <div className="row">
        <div className="col-sm-6">
            <div className="card large">
                <img
                    className="rounded"
                    src={project.imageUrl}
                    alt={project.name}
                />
                <section className="section dark">
                    <h3 className="strong">
                        <strong>{project.name}</strong>
                    </h3>
                    <p>{project.description}</p>
                    <p>Budget : {project.budget}</p>

                    <p>Signed: <TimeDisplay dateString={project.contractSignedOn}/></p>
                    <p>
                        <mark className="active">
                            {' '}
                            {project.isActive ? 'active' : 'inactive'}
                        </mark>
                    </p>
                </section>
            </div>
        </div>
    </div>
);
}