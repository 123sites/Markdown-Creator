
// This function will determine badges based on license selection.
function licenseBadge(value) {
  if (value === "") {
    return "[![License: AGPL v3](https://img.123sites.io/badge/License)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3")

}

module.exports = {
  licenseBadge: licenseBadge,
};