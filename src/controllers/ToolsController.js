const ToolsRepositories = require('../repositories/ToolsRepositories');

class ToolsController {
  async index(request, response) {
    const { tags } = request.query;
    const tools = await ToolsRepositories.findAll();

    const filteredParams = tags ? tools.filter((tool) => tool.tags.includes(tags)) : tools;

    return response.json(filteredParams);
  }

  async show(request, response) {
    const { id } = request.params;

    const tool = await ToolsRepositories.findById(id);

    if (!tool) {
      return response.status(400).json({ error: 'Tool not found!' });
    }

    return response.json(tool);
  }

  async store(request, response) {
    const {
      title, link, description, tags,
    } = request.body;

    if (!title || !link || !description) {
      return response.status(400).json({ error: 'There are many fields without data!' });
    }

    const newTool = await ToolsRepositories.create({
      title, link, description, tags,
    });

    return response.status(201).json(newTool);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      title, link, description, tags,
    } = request.body;

    if (!id) {
      return response.status(400).json({ error: 'Tool not found!' });
    }

    const updatedTool = await ToolsRepositories.update(id, {
      title, link, description, tags,
    });

    return response.json(updatedTool);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ToolsRepositories.delete(id);

    return response.json({});
  }
}

module.exports = new ToolsController();
