import { Col, Row } from "antd";

export default function BlogHeadline() {
    return (
        <Row align="middle"
            style={{
                height: 400,
                textAlign: "center",
            }}
        >
            <Col span={24}>
                <h1
                    style={{
                        fontSize: 70,
                        fontWeight: "bold",
                    }}
                >
                    Inho's Blog
                </h1>
                <p
                    style={{
                        fontSize: 24,
                    }}
                >
                    나와 주위 사람들의 행복을 만들어가는 이야기들...
                </p>
            </Col>
        </Row>
    )
}