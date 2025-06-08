export async function loadOrgData(orgId, {
  nameElementId,
  announcementElementId,
  logoElementId
}) {
  try {
    const response = await fetch(`get_org_by_id.php?id=${orgId}`);
    const data = await response.json();

    if (nameElementId) {
      document.getElementById(nameElementId).textContent = data.org_name;
    }

    if (announcementElementId) {
      const ann = document.getElementById(announcementElementId);
      if (ann) ann.textContent = data.announcement || "No announcement available.";
    }

    if (logoElementId) {
      const logo = document.getElementById(logoElementId);
      logo.src = `get_org_image.php?id=${orgId}`;
      logo.alt = `${data.org_name} Logo`;
    }

  } catch (error) {
    console.error('Failed to load organization data:', error);
  }
}
