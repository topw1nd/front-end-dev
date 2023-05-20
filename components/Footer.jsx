import { Col, Row } from "antd";
import Link from "next/link";
import { Card } from "antd";
import dayjs from 'dayjs';

export default function Footer({slug, thumbnail, title, subtitle, author, createdAt}) {
    return (
        <Row align="middle"
            style={{
                height: 50,
                textAlign: "right",
            }}
        >
            <Col span={24}>
                <p>2023 Inho Jo. All rights reserved.</p>
            </Col>
        </Row>
    )
}