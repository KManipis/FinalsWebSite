export async function loadOrgData(orgId, {
  nameElementId,
  announcementElementId,
  logoElementId,
  titleElementId
}) {
  try {
    const response = await fetch(`get_org_data.php?id=${orgId}`);
    const data = await response.json();

    if (nameElementId) {
      document.getElementById(nameElementId).textContent = data.org_name;
    }

    if (titleElementId) {
      document.getElementById(titleElementId).textContent = data.org_name;
    }

    if (announcementElementId) {
      document.getElementById(announcementElementId).textContent = data.announcement || "No announcement available.";
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
