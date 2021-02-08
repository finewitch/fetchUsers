import { Tag } from 'antd';
var companyCatchPhraseColors = [
    'geekblue',
    'green',
    'orange',
    'purple'
];
export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (name, record) => (
            <>
                {name}
                <div className="aka"> aka  {record.username}</div>

            </>
        )
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: text => <a href={"mailto:" + { text }}>{text}</a>
    },
    {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
        render: text => <a href={text} target="_blank" rel="noreferrer">{text}</a>,
    },
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        render: company => {
            const randomColor = companyCatchPhraseColors[Math.floor(Math.random() * companyCatchPhraseColors.length)];
            return (
                <>
                    <span>{company.name}</span>
                    <div>
                        <Tag color={randomColor}>
                            {company.cp.toUpperCase()}
                        </Tag>
                    </div>
                </>
            )
        }
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (address) => {
            // const url = 'https://www.google.com/maps/search/?api=1&query=<' + address.geo.lat + '>,<' + address.geo.lng + '>'
            return (
                <>
                    <div>{address.city}</div>
                    <div>{address.zipcode}</div>
                    <div>{address.street}</div>
                </>
            )
        }
    },
];
