// src/__tests__/cheerio.spec.js
"use strict";

const cheerio = require("cheerio");
const assert = require("assert");

function buildHtml() {
  return `
    <ul id="fruits">
      <li class="apple">Apple</li>
      <li class="orange">Orange</li>
      <li class="pear">Pear</li>
    </ul>
  `;
}

function runChecks() {
  const html = buildHtml();
  const $ = cheerio.load(html);

  // README examples
  const appleText = $(".apple", "#fruits").text();
  const pearClass = $("ul .pear").attr("class");
  const orangeHtml = $("li[class=orange]").html();
  const rendered = $.root().html();

  assert.strictEqual(appleText, "Apple", 'Apple text should be "Apple"');
  assert.strictEqual(pearClass, "pear", 'Pear class should be "pear"');
  assert.strictEqual(orangeHtml, "Orange", 'Orange HTML should be "Orange"');

  // light checks on rendered output
  assert.ok(
    rendered.includes('<ul id="fruits">'),
    "Rendered should contain the fruits list",
  );
  assert.ok(
    rendered.includes('class="apple">Apple'),
    "Rendered should contain apple li",
  );
  assert.ok(
    rendered.includes('class="orange">Orange'),
    "Rendered should contain orange li",
  );
  assert.ok(
    rendered.includes('class="pear">Pear'),
    "Rendered should contain pear li",
  );

  return { appleText, pearClass, orangeHtml, rendered };
}

/* ======== Run under Jest ======== */
/* If Jest globals exist, register using describe/test so output integrates */
if (typeof describe === "function" && typeof test === "function") {
  describe("Cheerio fruits demo from README", () => {
    test("selectors and rendering", () => {
      const results = runChecks();
      expect(results.appleText).toBe("Apple");
      expect(results.pearClass).toBe("pear");
      expect(results.orangeHtml).toBe("Orange");
      expect(results.rendered).toContain('<ul id="fruits">');
    });
  });

  /* ======== Run directly with Node ======== */
  /* When run as a script (node file.js), execute checks and exit accordingly */
} else if (typeof require !== "undefined" && require.main === module) {
  try {
    const results = runChecks();
    console.log("✔ Cheerio fruits demo passed");
    // optional: print short summary
    console.log(
      `Apple: ${results.appleText}; Pear class: ${results.pearClass}; Orange: ${results.orangeHtml}`,
    );
    process.exit(0);
  } catch (err) {
    console.error("❌ Cheerio fruits demo failed");
    console.error(err && err.stack ? err.stack : err);
    process.exit(1);
  }

  /* ======== Export for programmatic use (optional) ======== */
} else {
  module.exports = { runChecks, buildHtml };
}
