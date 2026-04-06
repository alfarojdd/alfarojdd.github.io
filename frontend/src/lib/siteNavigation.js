export const LOGBOOK_HASH_PREFIX = "#logbook/";

export const getLogbookSlugFromHash = (hashValue = "") => {
  if (!hashValue.startsWith(LOGBOOK_HASH_PREFIX)) {
    return null;
  }

  return hashValue.replace(LOGBOOK_HASH_PREFIX, "");
};

export const getSectionIdFromHash = (hashValue = "") => {
  if (!hashValue.startsWith("#")) {
    return "";
  }

  const sectionId = hashValue.slice(1);
  return sectionId.includes("/") ? "" : sectionId;
};
