import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetNewsQuery } from "../services/newsApi";

import newsImg from "../images/news-img.png";

const { Text, Title } = Typography;
const { Option } = Select;

export default function News({ simplified }) {
  const { data: news } = useGetNewsQuery({
    newsCat: "Cryptocurrency",
    count: simplified ? 6 : 21,
  });

  console.log(news);
  return (
    <Row gutter={[23, 23]}>
      {news?.value.map((n, i) => (
        <Col xs={23} sm={12} lg={7} key={i}>
          <Card hoverable className="news-card-div">
            <a href={n.url} target="_blank" rel="noreferrer">
              <div className="news=image-container-div">
                <Title className="news-title-div" level={4}>
                  {n.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={n?.image?.thumbnail?.contentUrl || newsImg}
                  alt="News picture"
                />
              </div>
              <p>
                {n.description > 90
                  ? `${n.description.substring(0, 90)} ...`
                  : n.description}
              </p>
              <div className="provider-container-div">
                <div>
                  <Avatar
                    src={n.provider[0]?.image?.thumbnail?.contentUrl || newsImg}
                    alt="Provider"
                  />
                  <Text className="provider-name-div">
                    {n.provider[0]?.name}
                  </Text>
                </div>

                <Text>{moment(n.datePublished).startOf("ss").fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
