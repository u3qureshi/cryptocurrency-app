import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetNewsQuery } from "../services/newsApi";
import { useGetCryptosQuery } from "../services/cryptoAPI";

import newsImg from "../images/news-img.png";

const { Text, Title } = Typography;
const { Option } = Select;

export default function News({ simplified }) {
  const [currNewsCat, setCurrNewsCat] = useState("Cryptocurrency");
  const { data: news } = useGetNewsQuery({
    newsCat: currNewsCat,
    count: simplified ? 6 : 21,
  });
  const { data } = useGetCryptosQuery(100);

  return (
    <Row gutter={[23, 23]}>
      {!simplified && (
        <Col span={23}>
          <Select
            showSearch
            className="select-news-div"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setCurrNewsCat(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
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
