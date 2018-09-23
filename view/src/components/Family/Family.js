import React from "react";


import "./Family.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

function Family() {
  return (
    <Accordion>
        <h2>family</h2>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>Family Name</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <ul>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
            </ul>
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>Family Name</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <ul>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
            </ul>
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>Family Name</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <ul>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
            </ul>
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>Family Name</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <ul>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Name of species</label>
              </li>
            </ul>
          </p>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  );
};

export default Family;