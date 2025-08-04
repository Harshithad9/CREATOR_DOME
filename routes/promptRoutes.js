// controllers/promptController.js

exports.savePrompt = (req, res) => {
  const { promptText, category, generatedPrompt } = req.body;
  const userId = req.user.uid;

  if (!promptText || !category || !generatedPrompt) {
    return res.status(400).json({ message: "Missing fields." });
  }

  // For now, simulate DB save with console
  console.log(`Saving for user ${userId}:`, { promptText, category, generatedPrompt });

  return res.status(201).json({ message: "Prompt saved successfully!" });
};
