import React from 'react'
import { WhiteSpace, Card, WingBlank } from 'antd-mobile'
import { Link } from 'react-router-dom'
export const TrainerCard = ({ tainerAvatar, name = 'john', bref = 'john is good' }) => {
    return (
        <Link to="/trainerbooking/123">
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title={name}
                        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={<span>约ta</span>}
                    />
                    <Card.Body>
                        <div>{bref}</div>
                    </Card.Body>
                </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
        </Link>
    )
}
