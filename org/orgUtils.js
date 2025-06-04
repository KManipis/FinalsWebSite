export async function loadOrgData(orgId, options = {}) {
  if (!orgId) {
    console.error("Missing orgId");
    return;
  }

  try {
    const response = await fetch(`get_org_by_id.php?id=${orgId}`);
    if (!response.ok) throw new Error("Failed to fetch org data");
    const data = await response.json();

    if (options.nameElementId)
      document.getElementById(options.nameElementId).innerText = data.org_name || "No name";

    if (options.announcementElementId)
      document.getElementById(options.announcementElementId).innerText = data.announcement || "No announcement yet.";

    if (options.logoElementId) {
      const logoImg = document.getElementById(options.logoElementId);
      const url = `get_org_image.php?id=${orgId}&t=${Date.now()}`;
      console.log("Setting logo:", url);
      logoImg.src = url;

      // Set default styling if not present
      if (!logoImg.hasAttribute("width")) logoImg.setAttribute("width", "200");
      if (!logoImg.hasAttribute("alt")) logoImg.setAttribute("alt", "Organization Logo");
    }

  } catch (err) {
    console.error("Error loading organization data:", err);
  }
}
