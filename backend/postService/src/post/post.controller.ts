import type { RequestHandler } from "express";
import type { createPostManager } from "./post.manager.js";

export const createPostController = (
  postManager: ReturnType<typeof createPostManager>,
) => {
  const createPost: RequestHandler = (req, res, next) => {
    const input = {
      postName: req.body.postName.trim(),
      userId: req.body.userId,
      text: req.body.text.trim(),
      ...(req.body.media ? { media: req.body.media.trim() } : {}),
    };

    return postManager
      .createPost(input)
      .then((post) => {
        res.status(201).json(post);
      })
      .catch(next);
  };

  const getAllPosts: RequestHandler = (req, res, next) =>
    postManager
      .getAllPosts()
      .then((posts) => {
        res.status(200).json(posts);
      })
      .catch(next);

  const getPostById: RequestHandler = (req, res, next) =>
    postManager
      .getPostById(req.params.id)
      .then((post) => {
        if (!post) {
          res.status(404).json({ message: "Post not found" });
          return;
        }

        res.status(200).json(post);
      })
      .catch(next);

  const updatePost: RequestHandler = (req, res, next) => {
    const changes = {
      ...(req.body.postName !== undefined
        ? { postName: req.body.postName.trim() }
        : {}),
      ...(req.body.text !== undefined
        ? { text: req.body.text.trim() }
        : {}),
      ...(req.body.media !== undefined
        ? { media: req.body.media?.trim() || undefined }
        : {}),
    };

    return postManager
      .updatePost(req.params.id, changes)
      .then((post) => {
        if (!post) {
          res.status(404).json({ message: "Post not found" });
          return;
        }

        res.status(200).json(post);
      })
      .catch(next);
  };

  const deletePost: RequestHandler = (req, res, next) =>
    postManager
      .deletePost(req.params.id)
      .then((post) => {
        if (!post) {
          res.status(404).json({ message: "Post not found" });
          return;
        }

        res.status(200).json({
          message: "Post deleted successfully",
          post,
        });
      })
      .catch(next);

  return {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
  };
};
