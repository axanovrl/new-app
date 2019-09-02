import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import FieldInput from "../../../components/FieldInput";
import Select from "../../../components/Select";
import { Objective, PropertyType, Min, Max } from "./const";

const CampaignsForm = () => {
  return (
    <Form id="campaigns-form" className="form-default">
      <FieldInput
        label="Location"
        placeholder="Enter a city or ZIP Code"
        type="number"
      />
      <Form.Row>
        <Col>
          <Select options={PropertyType} label="Property Type" />
        </Col>
        <Col>
          <Select options={Objective} label="Objective" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Select options={Min} label="Min Property Price" />
        </Col>
        <Col>
          <Select options={Max} label="Max Property Price" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Bid Amount</Form.Label>
            <Form.Control type="number" placeholder="0"></Form.Control>
            <Form.Text className="text-muted">Minimum amount $10.00</Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Max Property Price</Form.Label>
            <Form.Control type="number" placeholder="0"></Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <div className="line" />
      <div className="mb-2-hf">
        <h2>More about this campaign</h2>
      </div>
      <FieldInput label="Campaign Name" placeholder="Enter your campaign" />
      <div className="d-flex justify-content-center mt-2-hf">
        <Link to="/campaigns">
          <Button
            variant="btn-primary"
            type="submit"
            className="btn-spacing-295 form-label"
          >
            Create Campaign
          </Button>
        </Link>
      </div>
    </Form>
  );
};

export default CampaignsForm;
