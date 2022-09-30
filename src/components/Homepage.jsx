import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoAPI";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";

  return (
    <div>
      <>
        <Title level={2} className="heading-div">
          Global Crypto Statistics
        </Title>
        <Row>
          <Col span={12}>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Market Cap"
              value={millify(globalStats.totalMarketCap)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24h Volume"
              value={millify(globalStats.total24hVolume)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
            />
          </Col>
        </Row>
        <div className="home-heading-container-div">
          <Title level={2} className="home-title-div">
            Top 10 Cryptocurrencies in the Cosmos
          </Title>
          <Title level={3} className="show-more-div">
            <Link to={"/cryptocurrencies"}>Show more</Link>
          </Title>
        </div>
        <Cryptocurrencies simplified={true} />
        <div className="home-heading-container-div">
          <Title level={2} className="home-title-div">
            Latest Crypto News
          </Title>
          <Title level={3} className="show-more-div">
            <Link to={"/news"}>Show more</Link>
          </Title>
        </div>
        <News simplified={true} />
      </>
    </div>
  );
}

export default Homepage;
