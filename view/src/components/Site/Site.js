import React from "react";
// import ReactDOM from "react-dom";

import "./Site.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

function Site() {
  return (
    <Accordion>
        <h2>site location</h2>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>Toronto West</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <ul>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">High Park</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Centennial Park</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Colonel Samuel Smith</label>
              </li>
            </ul>
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>Toronto South</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <ul>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Trinity Bellwoods</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Trinity Bellwoods</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Trinity Bellwoods</label>
              </li>
            </ul>
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>Toronto East</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <ul>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Trinity Bellwoods</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Trinity Bellwoods</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Trinity Bellwoods</label>
              </li>
            </ul>
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <h3>Toronto North</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            <ul>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Trinity Bellwoods</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Trinity Bellwoods</label>
              </li>
              <li>
                <input type="checkbox" id="test2" checked="checked" />
                <label for="test2">Trinity Bellwoods</label>
              </li>
            </ul>
          </p>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  );
};

export default Site;